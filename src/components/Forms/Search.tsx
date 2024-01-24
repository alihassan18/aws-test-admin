import clsx from "clsx";
import React, { useCallback, useEffect } from "react";
import { debounce, throttle } from "lodash";
interface IProps {
  className?: string;
  query?: string;
  setQuery?: React.Dispatch<React.SetStateAction<string>>;
  Placeholder?: string;
  parentClass?: string;
  onFocus?: Function;
}

const Search = ({
  className,
  query,
  Placeholder,
  parentClass,
  setQuery,
  onFocus,
}: IProps) => {
  // This function will be run every 300ms at most, even if onChange is triggered more often
  const throttledSetQuery = useCallback(
    throttle((value: string) => {
      setQuery?.(value);
    }, 300),
    []
  );

  // This function will be run 300ms after the user has stopped typing
  const debouncedSetQuery = useCallback(
    debounce((value) => {
      setQuery?.(value);
    }, 300),
    []
  );

  // Decide here whether to use the throttled or debounced function
  const handleQueryChange = (e: { target: { value: any } }) => {
    // Call one of the functions here depending on your requirements
    // throttledSetQuery(e.target.value);
    debouncedSetQuery(e.target.value);
  };

  // Cancel any pending function calls when the component unmounts
  useEffect(() => {
    return () => {
      throttledSetQuery.cancel();
      debouncedSetQuery.cancel();
    };
  }, [throttledSetQuery, debouncedSetQuery]);

  return (
    <>
      <label
        htmlFor="default-search"
        className="sr-only mb-2 text-sm font-medium text-gray-900 "
      >
        Search
      </label>
      <div className={clsx(parentClass, "relative")}>
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <i className="icon-search text-sm text-borderColor"></i>
        </div>
        <input
          type="search"
          id="default-search"
          className={clsx(
            className,
            "block h-full w-full rounded-md border  py-2.5  pr-2 pl-8 text-sm   outline-none placeholder:text-lightPlaceholder   focus:ring-0  disabled:cursor-not-allowed disabled:bg-[#e9ecef]  border-borderColor bg-bgColor text-white placeholder:text-borderColor focus:border-primary focus:ring-primary"
          )}
          onChange={handleQueryChange}
          onFocus={(e) => (onFocus ? onFocus(e) : {})}
          autoComplete="off"
          placeholder={`${Placeholder ? Placeholder : "Search"}`}
          required
        />
      </div>
    </>
  );
};

export default Search;
