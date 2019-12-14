import { directive, NodePart } from 'lit-html';

export const when = directive((condition, trueValue, falseValue) => part => {
  if (!(part instanceof NodePart)) {
    const err = new Error('when can only be used in text bindings');
    logger.error(err);
    throw err;
  }
  trueValue = trueValue || (() => null);
  falseValue = falseValue || (() => null);
  const value = condition ? trueValue() : falseValue();
  part.setValue(value);
  part.commit();
});
