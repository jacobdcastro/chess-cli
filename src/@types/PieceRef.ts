export interface PieceRef {
  readonly type: String;
  readonly _id: String;
}

export type PieceIcon =
  | '♟ ' // P
  | '♙ ' // p
  | '♞ ' // N
  | '♘ ' // n
  | '♝ ' // B
  | '♗ ' // b
  | '♜ ' // R
  | '♖ ' // r
  | '♚ ' // K
  | '♔ ' // k
  | '♛ ' // Q
  | '♕ '; // q

export type PieceValue = 1 | 3 | 5 | 9 | 1000000000000;
