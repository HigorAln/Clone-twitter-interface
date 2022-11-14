import { ReactNode } from "react";
import Skeleton, { SkeletonProps } from "react-loading-skeleton";
import { AnimatePresence, motion as m } from "framer-motion";

import "react-loading-skeleton/dist/skeleton.css";

interface Props extends SkeletonProps {}

export function SkeletonTwitters({ ...rest }: Props) {
  return (
    <AnimatePresence>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="border-b py-3 flex flex-col"
      >
        <div className="flex px-4 gap-3">
          <Skeleton circle={true} className="w-14 h-14" />

          <div className="flex flex-col flex-1">
            <Skeleton className="w-1/2" />

            <Skeleton count={1} className="w-1/3" />
            <Skeleton count={1} className="h-24" />
          </div>
        </div>
      </m.div>
    </AnimatePresence>
  );
}
