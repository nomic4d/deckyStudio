export type RowTuple = string[];

/**
 * A normalized pictogram row after parsing & mapping
 */
export interface PictogramRow {
  label: string;
  value: number;
  color?: string;
}

export interface PictogramConfig {
  iconSvg: string; // raw SVG string used as icon
  iconValue: number; // how many units each icon represents (1, 10, 100...)
  columns: number; // number of icons per row in a grid
  cellSize: number; // icon cell size in px
  padding: number; // vertical padding between blocks
  width: number; // target output width in px
}