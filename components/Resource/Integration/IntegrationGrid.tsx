import React from 'react';
import Image from 'next/image';

interface AppItem {
  name: string;
  category: string;
  logoFileName: string; // e.g., 'hubspot.png'
}

// The array is ordered exactly as the apps appear in your screenshot.
const APPS_DATA: AppItem[] = [
  { name: 'HubSpot', category: 'CRM & Sales Solutions', logoFileName:'hubspot.png' },
  { name: 'WhatsApp', category: 'Business Messaging', logoFileName: 'whatsapp.jpeg' },
  { name: 'Instagram', category: 'Social Messaging', logoFileName: 'instagram.jpeg' },
  { name: 'Facebook Messenger', category: 'Social Messaging', logoFileName: 'messanger.jpeg' },
  { name: 'Google Sheets', category: 'Lead Tracking', logoFileName: 'sheet.png' },
  { name: 'Google Calendar', category: 'Booking Sync', logoFileName: 'gCalander.png' },
  { name: 'Telegram', category: 'Business Messaging', logoFileName: 'tg.png' },
  { name: 'n8n', category: 'Workflow Automation', logoFileName: 'n8n.png' },
  { name: 'Razorpay', category: 'Payment Gateway', logoFileName: 'razerpay.jpeg' },
  { name: 'Order Tracking', category: 'Shipping Integration', logoFileName: 'order.png' },
  { name: 'Zoho', category: 'CRM & Sales Solutions', logoFileName: 'zoho.png' },
  { name: 'Salesforce', category: 'CRM Sync', logoFileName: 'salesforce.png' },
  { name: 'Odoo', category: 'CRM & Sales Solutions', logoFileName: 'oodo.png' },
  { name: 'IndiaMART', category: 'Lead Import Software', logoFileName: 'indiamart.jpeg' },
  { name: 'Calendly', category: 'Marketing & Bookings / Leads', logoFileName: 'calendly.png' },
  { name: 'WooCommerce', category: 'Orders & Customers', logoFileName: 'wc.jpeg' },
  { name: 'PayPal', category: 'Payment Gateway', logoFileName: 'pp.png' },
  { name: 'Shopify', category: 'Orders & Customers', logoFileName: 'shopify.png' },
  { name: 'PhonePe', category: 'Payments', logoFileName: 'phonepe.png' },
  { name: 'PayU', category: 'Payment Gateway', logoFileName: 'payu.png' },
  { name: 'Cashfree', category: 'Payment Gateway', logoFileName: 'cashfree.png' },
  { name: 'Paytm', category: 'Payments', logoFileName: 'paytm.png' },
];

const AppCard: React.FC<{ app: AppItem }> = ({ app }) => (
  <div className="bg-white border border-gray-100 rounded-3xl p-6 flex flex-col items-center text-center 
                  transition-all duration-300 ease-in-out h-full 
                  hover:border-transparent hover:shadow-2xl hover:shadow-emerald-500/10 group">
    <div className="relative w-20 h-20 mb-6 flex items-center justify-center overflow-hidden shrink-0">
      <Image
        src={`/integration/${app.logoFileName}`}
        alt={`${app.name} Logo`}
        fill
        // Removed 'group-hover:scale-110' to keep logo static on hover
        className="object-contain transition-transform duration-300"
        sizes="(max-width: 768px) 80px, (max-width: 1024px) 80px, 80px"
      />
    </div>
    <h3 className="text-lg font-semibold text-gray-900 mb-1.5 leading-tight">{app.name}</h3>
    <p className="text-sm text-gray-500 font-normal leading-normal">{app.category}</p>
  </div>
);

export default function IntegrationGrid4Col() {
  return (
    <section className="w-full bg-gray-50 py-24 px-6 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Content */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="inline-block bg-emerald-100 text-emerald-700 px-4 py-1.5 rounded-full text-xs font-medium tracking-wide mb-5">
            EXPLORE BLUEPRINTS
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-950 tracking-tight mb-6 leading-tight">
            Pick From Our Top Integration Apps
          </h2>
          <p className="text-lg text-gray-600 font-normal">
            To Grow Your Business, On WhatsApp
          </p>
        </div>

        {/* Grid Container: Explicitly set to 4 columns on desktop, 3 on tablet, 2 on mobile */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6 lg:gap-6">
          {APPS_DATA.map((app, index) => (
            <AppCard key={index} app={app} />
          ))}
        </div>

      </div>
    </section>
  );
}