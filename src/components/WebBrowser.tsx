/**
 * v0 by Vercel.
 * @see https://v0.dev/t/VeJp7RyjAoQ
 */
import { Button } from '@/shadcn/button';
import { Input } from '@/shadcn/input';
import { cn } from '@/utils/twMerge';
import type { SVGProps } from 'react';
import type { JSX } from 'react/jsx-runtime';

export default function WebBrowser({
  children,
  className
}: {
  children: JSX.Element;
  className?: string;
}) {
  return (
    <div className={cn('flex flex-col bg-white', className)}>
      <header className="flex items-center justify-between border-b border-gray-200 bg-gray-100 px-4 py-2 dark:border-gray-700 dark:bg-gray-800">
        <div className="flex items-center space-x-2">
          <CircleIcon className="h-3 w-3 text-red-500" />
          <CircleIcon className="h-3 w-3 text-yellow-500" />
          <CircleIcon className="h-3 w-3 text-green-500" />
        </div>
        <div className="flex items-center space-x-2">
          <GlobeIcon className="h-6 w-6" />
          <img src="/naranja-logo.svg" alt="Naranja Labs logo" />
        </div>
      </header>
      <nav className="flex items-center justify-between border-b border-gray-200 bg-gray-200 px-4 py-2 dark:border-gray-700 dark:bg-gray-700">
        <div className="flex items-center space-x-2">
          <Button className="px-2 py-1">
            <ArrowLeftIcon className="h-4 w-4" />
          </Button>
          <Button className="px-2 py-1">
            <ArrowRightIcon className="h-4 w-4" />
          </Button>
          <Button className="px-2 py-1">
            <ArrowRightCircleIcon className="h-4 w-4" />
          </Button>
        </div>
        <div className="ml-2 flex flex-grow items-center space-x-2">
          <Input
            className="flex-grow"
            placeholder="Search Google or enter a URL"
          />
          <Button className="px-2 py-1">
            <SearchIcon className="h-4 w-4" />
          </Button>
        </div>
      </nav>
      <div className="flex-1 px-4 py-6">{children}</div>
      <footer className="flex items-center justify-between border-t border-gray-200 bg-gray-100 px-4 py-2 dark:border-gray-700 dark:bg-gray-800">
        <a className="text-sm hover:underline" href="#">
          Home
        </a>
        <a className="text-sm hover:underline" href="#">
          About
        </a>
        <a className="text-sm hover:underline" href="#">
          Contact
        </a>
      </footer>
    </div>
  );
}

function ArrowLeftIcon(
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
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  );
}

function ArrowRightCircleIcon(
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
      <circle cx="12" cy="12" r="10" />
      <path d="M8 12h8" />
      <path d="m12 16 4-4-4-4" />
    </svg>
  );
}

function ArrowRightIcon(
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
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function CircleIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}

function GlobeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <circle cx="12" cy="12" r="10" />
      <line x1="2" x2="22" y1="12" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function SearchIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
