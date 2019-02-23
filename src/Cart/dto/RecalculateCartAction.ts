export interface RecalculateCartAction {
  type: string;
  payload: { id: number; quantity: number };
}
