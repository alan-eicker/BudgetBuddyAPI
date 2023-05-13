import * as expenseGroup from '../models/expenseGroup';

export const getAllExpensesByGroupId = async (req, res, next) => {
  const { expenseGroupId } = req.params;

  const { data, error } = await expenseGroup.getAllExpensesByGroupId(
    expenseGroupId,
  );

  if (error) return next(error);

  return res.status(200).send({ data });
};
