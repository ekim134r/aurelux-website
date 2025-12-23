
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const headers: Record<string, string> = {
            'Content-Type': 'application/json',
        };

        // 1. HubSpot Integration
        const hubspotPortalId = process.env.HUBSPOT_PORTAL_ID;
        const hubspotFormGuid = process.env.HUBSPOT_FORM_GUID;

        if (hubspotPortalId && hubspotFormGuid) {
            const hubspotUrl = `https://api.hsforms.com/submissions/v3/integration/submit/${hubspotPortalId}/${hubspotFormGuid}`;

            const hubspotData = {
                fields: Object.keys(body).map(key => ({
                    name: key,
                    value: body[key]
                })),
                context: {
                    pageUri: body.pageUri || '',
                    pageName: body.pageName || ''
                }
            };

            const hubspotResponse = await fetch(hubspotUrl, {
                method: 'POST',
                headers,
                body: JSON.stringify(hubspotData),
            });

            if (!hubspotResponse.ok) {
                console.error('HubSpot API Error:', await hubspotResponse.text());
            }
        }

        // Check for Auth Header Token if required
        if (process.env.N8N_AUTH_TOKEN) {
            headers['Authorization'] = process.env.N8N_AUTH_TOKEN;
        }

        // 2. N8N Webhook Integration - Final Production URL
        const webhookUrl = 'https://n8n.srv1180614.hstgr.cloud/webhook/submit-form';

        const n8nResponse = await fetch(webhookUrl, {
            method: 'POST',
            headers,
            body: JSON.stringify(body),
        });

        if (n8nResponse.ok) {
            try {
                const data = await n8nResponse.json();
                if (data.status === 'success') {
                    return NextResponse.json(data);
                }
            } catch {
                // Response wasn't JSON, continue
            }
        }

        // 3. Zapier Fallback (Secondary)
        const zapierWebhookUrl = process.env.ZAPIER_WEBHOOK_URL;
        if (zapierWebhookUrl) {
            await fetch(zapierWebhookUrl, {
                method: 'POST',
                headers,
                body: JSON.stringify(body),
            });
        }

        return NextResponse.json({ success: true, message: 'Form submitted successfully' });
    } catch (error) {
        console.error('Submission Error:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to submit form' },
            { status: 500 }
        );
    }
}
