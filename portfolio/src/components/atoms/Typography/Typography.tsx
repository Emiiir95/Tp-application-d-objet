import classNames from 'classnames';
import React from 'react';

import { BreakWords, FontStyle, FontWeight, HTMLTag, TextAlign, TextColor, TextTransform, VariantType } from './interface';

type Shade = '50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';

type Props = {
  children: React.ReactNode;
  id?: string;
  variant?: VariantType;
  tag?: HTMLTag;
  align?: TextAlign;
  breakWords?: BreakWords;
  ellipsis?: boolean;
  onClick?: () => void;
  transform?: TextTransform;
  weight?: FontWeight;
  color?: TextColor;
  customColor?: string;
  withCarriageReturn?: boolean;
  customColorClass?: `text-${TextColor}-${Shade}`;
  marginClass?: `${'m' | 'p'}${string}`;
  styleFont?: FontStyle;
  shadow?: boolean;
};

export const VARIANT_TO_TAG: Record<VariantType, HTMLTag> = {
  heroTitle: 'h1',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  cardTitle: 'h3',
  small: 'p',
  paragraph: 'p'
};

export const Typography = ({
  children,
  id,
  variant,
  tag,
  align,
  breakWords,
  ellipsis = false,
  onClick = () => undefined,
  weight,
  transform,
  color,
  customColor,
  customColorClass,
  marginClass,
  withCarriageReturn,
  shadow,
  styleFont
}: Props) => {
  const CustomTag = tag || (variant && VARIANT_TO_TAG[variant]) || 'p';
  const appliedColor = customColor || undefined;

  return (
    <CustomTag
      data-testid={id}
      style={{ color: appliedColor }}
      id={id}
      className={classNames(
        'align-left font-normal',
        [
          variant === 'heroTitle' && ['text-black-600 text-3xl font-medium leading-normal', 'lg:text-4xl xl:text-5xl'],
          variant === 'h1' && 'font-900 text-3xl',
          variant === 'h2' && 'font-900 text-2xl',
          variant === 'h3' && 'font-900 text-xl leading-6',
          variant === 'h4' && 'font-900 text-sm',
          variant === 'cardTitle' && 'text-base font-semibold',
          variant === 'paragraph' && 'font-500 text-base sm:text-sm md:text-base',
          variant === 'small' && 'text-xs'
        ],
        [breakWords === 'all' && 'break-all', breakWords === 'words' && 'break-words', breakWords === 'normal' && 'break-normal'],
        ellipsis && 'truncate',
        [align === 'left' && 'text-left', align === 'center' && 'text-center', align === 'right' && 'text-right', align === 'justify' && 'text-justify'],
        [transform === 'capitalize' && 'capitalize', transform === 'uppercase' && 'uppercase', transform === 'lowercase' && 'lowercase'],
        [
          weight === 'regular' && 'font-normal',
          weight === 'medium' && 'font-medium',
          weight === 'semibold' && 'font-semibold',
          weight === 'bold' && 'font-bold',
          weight === 'extrabold' && 'font-extrabold'
        ],
        [
          color === 'primary' && 'text-primary-500',
          color === 'secondary' && 'text-secondary-500',
          color === 'gray' && 'text-gray-500',
          color === 'orange' && 'text-orange-500',
          color === 'red' && 'text-red-500',
          color === 'white' && 'text-white'
        ],
        shadow && 'drop-shadow-lg',
        customColorClass && customColorClass,
        marginClass && marginClass,
        styleFont && styleFont,
        withCarriageReturn && 'whitespace-pre-line'
      )}
      onClick={onClick}
    >
      {children}
    </CustomTag>
  );
};
