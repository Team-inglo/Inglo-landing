"use client";

import { RefObject, useCallback, useState } from "react";

const throttle = (func: () => void, delay: number) => {
  let timer;
  if (!timer) {
    timer = setTimeout(function () {
      timer = null;
      func();
    }, delay);
  }
};

type useHorizontalScrollType = {
  onMouseDown: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onMouseMove: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onMouseUp: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onMouseLeave: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

export const useHorizontalScroll = (
  scrollRef: RefObject<HTMLDivElement>,
): useHorizontalScrollType => {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [totalX, setTotalX] = useState<number>(0);

  const preventUnexpectedEffects = useCallback((e: Event) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const onDragStart = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    preventUnexpectedEffects(e.nativeEvent);
    setIsDragging(true);
    const x = e.clientX;
    setStartX(x);
    if (scrollRef.current && "scrollLeft" in scrollRef.current)
      setTotalX(x + scrollRef.current.scrollLeft);
  };

  const onDragEnd = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!isDragging) return;
    if (!scrollRef.current) return;

    setIsDragging(false);

    const endX = e.clientX;
    const childNodes = [...(scrollRef.current?.childNodes || [])];
    const dragDiff = Math.abs(startX - endX);

    if (dragDiff > 10) {
      childNodes.forEach((child) => {
        child.addEventListener("click", preventUnexpectedEffects);
      });
    } else {
      childNodes.forEach((child) => {
        child.removeEventListener("click", preventUnexpectedEffects);
      });
    }
  };

  const onDragMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!isDragging) return;
    throttle(function () {
      preventUnexpectedEffects(e.nativeEvent);

      const scrollLeft = totalX - e.clientX;

      if (scrollRef.current && "scrollLeft" in scrollRef.current) {
        scrollRef.current.scrollLeft = scrollLeft;
      }
    }, 100);
  };

  return {
    onMouseDown: onDragStart,
    onMouseMove: onDragMove,
    onMouseUp: onDragEnd,
    onMouseLeave: onDragEnd,
  };
};
