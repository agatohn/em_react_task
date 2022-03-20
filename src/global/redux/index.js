import { createAction } from '@reduxjs/toolkit';

export const asyncActionCreator = action => {
  const values = ['REQUEST', 'SUCCESS', 'ERROR'];
  const types = values.reduce((acc, value) => {
    const type = `${action}_${value}`;
    acc[value] = type;
    acc[value.toLowerCase()] = createAction(type);
    return acc;
  }, {});
  return types;
};
