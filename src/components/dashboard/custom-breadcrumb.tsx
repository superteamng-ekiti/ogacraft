import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import Image from "next/image";

interface CustomBreadCrumbProps {
  breadcrumbs: {
    title: string;
    link?: string;
  }[];
}

export const CustomBreadCrumb = ({ breadcrumbs }: CustomBreadCrumbProps) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbs.map((breadcrumb, index) => {
          if (index === 0)
            return (
              <React.Fragment key={`home-${index}`}>
                <BreadcrumbItem>
                  <BreadcrumbLink href={breadcrumb.link}>
                    <Image
                      src="/icons/home-icon.svg"
                      width={24}
                      height={24}
                      alt="home icon"
                    />
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
              </React.Fragment>
            );

          if (index === breadcrumbs.length - 1)
            return (
              <BreadcrumbItem key={breadcrumb.title}>
                <BreadcrumbPage>{breadcrumb.title}</BreadcrumbPage>
              </BreadcrumbItem>
            );

          return (
            <React.Fragment key={breadcrumb.title}>
              <BreadcrumbItem>
                <BreadcrumbLink href={breadcrumb.link}>
                  {breadcrumb.title}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
