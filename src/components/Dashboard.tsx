import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/01VF9j0j5bN
 */

import { AvatarImage, AvatarFallback, Avatar } from '@/shadcn/avatar';
import { Input } from '@/shadcn/input';
import { Button } from '@/shadcn/button';
import type { SVGProps } from 'react';
import type { JSX } from 'react/jsx-runtime';
import type { ClassAttributes, HTMLAttributes } from 'react';

export default function Dashboard() {
  console.log('teste ssh key');
  return (
    <Theme appearance="light">
      <div className="flex h-full bg-gray-100">
        <aside className="w-64 bg-white pr-4">
          <div className="flex h-14 items-center justify-center border-b">
            <h2 className="text-2xl font-semibold text-gray-800 ">Your SaaS</h2>
          </div>
          <ul className="mt-2 text-gray-600">
            <li className="mt-8">
              <a className="flex items-center px-6 py-2 text-gray-700" href="#">
                <LayoutDashboardIcon className="h-4 w-4" />
                <span className="mx-4">Dashboard</span>
              </a>
            </li>
            <li className="mt-2">
              <a className="flex items-center px-6 py-2 text-gray-700" href="#">
                <SubscriptIcon className="h-4 w-4" />
                <span className="mx-4">Subscriptions</span>
              </a>
            </li>
            <li className="mt-2">
              <a className="flex items-center px-6 py-2 text-gray-700" href="#">
                <CreditCardIcon className="h-4 w-4" />
                <span className="mx-4">Billing</span>
              </a>
            </li>
            <li className="mt-2">
              <a className="flex items-center px-6 py-2 text-gray-700" href="#">
                <SettingsIcon className="h-4 w-4" />
                <span className="mx-4">Settings</span>
              </a>
            </li>
          </ul>
        </aside>
        <main className="h-full">
          <header className="flex items-center justify-between border-b p-6">
            <h2 className="text-2xl font-semibold text-gray-800 ">Dashboard</h2>
            <Avatar className="h-8 w-8 border">
              <AvatarImage alt="@shadcn" src="/placeholder-user.jpg" />
              <AvatarFallback>AC</AvatarFallback>
            </Avatar>
          </header>
          <div className="p-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="800 rounded-lg bg-white p-6 shadow">
                <h3 className="mb-4 text-xl font-semibold text-gray-800 ">
                  Total Subscriptions
                </h3>
                <p className="text-4xl font-bold text-gray-800 ">1,234</p>
              </div>
              <div className="800 rounded-lg bg-white p-6 shadow">
                <h3 className="mb-4 text-xl font-semibold text-gray-800 ">
                  Monthly Revenue
                </h3>
                <p className="text-4xl font-bold text-gray-800 ">$12,345</p>
              </div>
              <div className="800 rounded-lg bg-white p-6 shadow">
                <h3 className="mb-4 text-xl font-semibold text-gray-800 ">
                  Active Users
                </h3>
                <p className="text-4xl font-bold text-gray-800 ">567</p>
              </div>
              <div className="800 col-span-full rounded-lg bg-white p-6 shadow sm:col-span-2 lg:col-span-1">
                <h3 className="mb-4 text-xl font-semibold text-gray-800 ">
                  Revenue Chart
                </h3>
                <CurvedlineChart className="aspect-[2/1] w-full" />
              </div>
              <div className="800 col-span-full rounded-lg bg-white p-6 shadow sm:col-span-2 lg:col-span-1">
                <h3 className="mb-4 text-xl font-semibold text-gray-800 ">
                  Add Information
                </h3>
                <Input
                  className="mb-4 w-full"
                  placeholder="Enter information here"
                />
                <Button className="w-full">Add to List</Button>
              </div>
              <div className="800 col-span-full rounded-lg bg-white p-6 shadow sm:col-span-2 lg:col-span-1">
                <h3 className="mb-4 text-xl font-semibold text-gray-800 ">
                  Information List
                </h3>
                <ul>
                  <li className="border-b py-2">Information 1</li>
                  <li className="border-b py-2">Information 2</li>
                  <li className="border-b py-2">Information 3</li>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Theme>
  );
}

function CreditCardIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  );
}

function CurvedlineChart(
  props: JSX.IntrinsicAttributes &
    ClassAttributes<HTMLDivElement> &
    HTMLAttributes<HTMLDivElement>
) {
  return <div {...props}></div>;
}

function LayoutDashboardIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="7" height="9" x="3" y="3" rx="1" />
      <rect width="7" height="5" x="14" y="3" rx="1" />
      <rect width="7" height="9" x="14" y="12" rx="1" />
      <rect width="7" height="5" x="3" y="16" rx="1" />
    </svg>
  );
}

function SettingsIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function SubscriptIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m4 5 8 8" />
      <path d="m12 5-8 8" />
      <path d="M20 19h-4c0-1.5.44-2 1.5-2.5S20 15.33 20 14c0-.47-.17-.93-.48-1.29a2.11 2.11 0 0 0-2.62-.44c-.42.24-.74.62-.9 1.07" />
    </svg>
  );
}
