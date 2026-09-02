import { TargetNavCard } from "@/components/Target/TargetNavCard";
import type { TargetItem } from "@/components/Target/target-items";
import {
  BuildingIcon,
  HousesIcon,
  TowersIcon,
} from "@/components/Target/target-icons";

type TargetNavProps = {
  items: TargetItem[];
  activeId: string;
  onSelect: (id: string) => void;
};

const NAV_ICONS = {
  urbanizaciones: HousesIcon,
  edificios: BuildingIcon,
  multitorre: TowersIcon,
} as const;

export function TargetNav({ items, activeId, onSelect }: TargetNavProps) {
  return (
    <div className="absolute inset-x-0 bottom-0 z-20 hidden px-6 pb-8 md:block lg:px-16 lg:pb-10 xl:px-24">
      <div className="mx-auto grid max-w-5xl grid-cols-3 gap-4">
        {items.map((item) => {
          const Icon = NAV_ICONS[item.id as keyof typeof NAV_ICONS] ?? BuildingIcon;

          return (
            <TargetNavCard
              key={item.id}
              label={item.navLabel}
              icon={<Icon className="h-9 w-9" />}
              isActive={activeId === item.id}
              onSelect={() => onSelect(item.id)}
            />
          );
        })}
      </div>
    </div>
  );
}
