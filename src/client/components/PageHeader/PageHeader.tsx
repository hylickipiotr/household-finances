import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Link from "next/link";
import * as React from "react";
import { RiArrowLeftSLine, RiMoreFill } from "react-icons/ri";
import { IconButton } from "src/client/components/IconButton";

type PageHeaderProps = {
  title: React.ReactNode;
  description?: React.ReactNode;
  backPath?: string;
  actionsDropdown?: React.ReactNode;
};

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  description,
  backPath,
  actionsDropdown,
  children,
}) => {
  return (
    <div className="flex items-start justify-between">
      <div className="flex items-start space-x-6">
        {backPath && (
          <Link href={backPath}>
            <IconButton type="secondary" icon={<RiArrowLeftSLine />} />
          </Link>
        )}
        <div className="space-y-1">
          <div className="flex items-center space-x-3">
            <h1 className="text-3xl text-gray-900 truncate">{title}</h1>
            {actionsDropdown && (
              <DropdownMenu.Root>
                <DropdownMenu.DropdownMenuTrigger
                  asChild
                  className="outline-none"
                >
                  <IconButton size="small" icon={<RiMoreFill />} />
                </DropdownMenu.DropdownMenuTrigger>
                {actionsDropdown}
              </DropdownMenu.Root>
            )}
          </div>
          {description && <p className="text-gray-400">{description}</p>}
        </div>
      </div>
      {children}
    </div>
  );
};

export { PageHeader };
