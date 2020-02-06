export const REMOVE = 'REMOVE';
export const BUY = 'BUY';

export const buyAction = (item) => {
  return { 
      type: BUY, 
      payload: item 
    };
};
export const removeAction = (item) => {
  return { 
      type: REMOVE, 
      payload: item 
    };
};