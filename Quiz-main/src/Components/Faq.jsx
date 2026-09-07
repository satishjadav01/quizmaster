import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function Faq() {
  return (
    <div className="h-auto  w-full px-4 pb-15 pt-2">
      <div className="flex justify-center pb-10 text-2xl font-bold">FAQ</div>
      <div className="mx-auto w-full max-w-lg divide-y divide-white/5 rounded-xl bg-white/20">
        <Disclosure as="div" className="p-6" defaultOpen={false}>
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-sm/6 font-medium text-white group-data-hover:text-white/80">
              What is Quiz?
            </span>
            <ChevronDownIcon className="size-5 fill-white/60 group-data-hover:fill-white/50 group-data-open:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel className="mt-2 text-sm/5 text-white/50">
            Quiz is a free web development quiz platform featuring over 1k
            questions across 12 essential development topics. It's designed to
            help developers of all skill levels test and improve their knowledge
            through interactive quizzes.
          </DisclosurePanel>
        </Disclosure>
        <Disclosure as="div" className="p-6">
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-sm/6 font-medium text-white group-data-hover:text-white/80">
              Is it Free?
            </span>
            <ChevronDownIcon className="size-5 fill-white/60 group-data-hover:fill-white/50 group-data-open:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel className="mt-2 text-sm/5 text-white/50">
            Yes ! Quiz is completely free to use. No premium tiers, no hidden
            fees, and no advertisements interrupting your learning experience.
          </DisclosurePanel>
        </Disclosure>
        <Disclosure as="div" className="p-6">
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-sm/6 font-medium text-white group-data-hover:text-white/80">
              What Topic are Covered?
            </span>
            <ChevronDownIcon className="size-5 fill-white/60 group-data-hover:fill-white/50 group-data-open:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel className="mt-2 text-sm/5 text-white/50">
            Quiz. covers 12 key web development areas : HTML, CSS, JavaScript,
            PHP, SQL, frontend frameworks (React, Vue, Angular), backend
            frameworks (Laravel, Django, Express), accessibility, UX/UI, SEO,
            web security, and performance optimization.
          </DisclosurePanel>
        </Disclosure>
        <Disclosure as="div" className="p-6">
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-sm/6 font-medium text-white group-data-hover:text-white/80">
              Can I Contribute to Quiz?
            </span>
            <ChevronDownIcon className="size-5 fill-white/60 group-data-hover:fill-white/50 group-data-open:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel className="mt-2 text-sm/5 text-white/50">
            Absolutely ! Quizstack is open-source and we welcome contributions
            through GitHub. Whether you're fixing bugs, adding features, or
            improving documentation, simply fork our repository, make your
            changes, and submit a pull request. Check our contributor guidelines
            for more details on how to get involved.
          </DisclosurePanel>
        </Disclosure>
      </div>
    </div>
  );
}
