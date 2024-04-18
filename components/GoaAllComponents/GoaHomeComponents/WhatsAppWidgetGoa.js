'use client'
import { useEffect } from 'react';

const ChatWidget = () => {
    useEffect(() => {
        const url = 'https://wati-integration-prod-service.clare.ai/v2/watiWidget.js?34483';
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.src = url;
        script.onload = () => {
            const options = {
                "enabled": true,
                "chatButtonSetting": {
                    "backgroundColor": "#00e785",
                    "ctaText": "Chat with us",
                    "borderRadius": "25",
                    "marginLeft": "0",
                    "marginRight": "20",
                    "marginBottom": "20",
                    "ctaIconWATI": true,
                    "position": "right"
                },
                "brandSetting": {
                    "brandName": "The Zuri Hotels",
                    "brandSubTitle": "The Zuri White Sands, Goa <br> Mon - Sat (10am - 6pm)",
                    "brandImg": "https://www.wati.io/wp-content/uploads/2023/04/Wati-logo.svg",
                    "welcomeText": "Hi there!\nHow can I help you?",
                    "messageText": "Hello, %0A I have an enquiry.",
                    "backgroundColor": "#800080",
                    "ctaText": "Chat with us",
                    "borderRadius": "25",
                    "autoShow": false,
                    "phoneNumber": "9158998417"
                }
            };
            window.CreateWhatsappChatWidget(options);
        };
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return null;
};

export default ChatWidget;