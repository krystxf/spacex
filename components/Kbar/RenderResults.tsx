import { KBarResults, useMatches } from 'kbar';
import React from 'react';

const RenderResults = () => {
  const { results } = useMatches();

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === 'string' ? (
          <div className="opacity-50 py-[8px] px-[16px] uppercase text-[12px]">
            {item}
          </div>
        ) : (
          <div
            className={`py-[12px] px-[16px] flex cursor-pointer transition-all ease-in-out duration-200 items-center justify-between bg-white font-semibold text-lg ${
              active ? 'bg-gray-200' : ''
            }`}
          >
            <div className="flex gap-[8px] text-[14px] items-center">
              {item.icon && item.icon}
              <div className="flex flex-col">
                <div>
                  <span>{item.name}</span>
                </div>
                {item.subtitle && (
                  <span className="text-[12px]">{item.subtitle}</span>
                )}
              </div>
            </div>
            {item.shortcut?.length ? (
              <div
                aria-hidden
                style={{ gridAutoFlow: 'column' }}
                className="grid gap-[4px]"
              >
                {item.shortcut.map((shortcut) => (
                  <kbd
                    key={shortcut}
                    className={`py-[4px] px-[6px] bg-[#00000038] text-white backdrop-blur-md backdrop-filter text-[14px] rounded-[4px]`}
                  >
                    {shortcut}
                  </kbd>
                ))}
              </div>
            ) : null}
          </div>
        )
      }
    />
  );
};

export default RenderResults;
