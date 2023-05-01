import React, {isValidElement} from "react";
import categories from "../categories";
import {TypeOf, z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
//      .mb-3>label.form-label+select.form=select

interface Props {
  onSubmit: (data: ExpenseForData) => void;
}
const schema = z.object({
  description: z
    .string()
    .min(3, {message: "Description should be at least 3 characters."})
    .max(50),
  amount: z
    .number({invalid_type_error: "Amount is required."})
    .min(0.01)
    .max(100_00),
  category: z.enum(categories, {
    errorMap: () => ({message: "Category is required."}),
  }),
});

type ExpenseForData = z.infer<typeof schema>;

const ExpenseForm = ({onSubmit}: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm<ExpenseForData>({resolver: zodResolver(schema)});
  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data), reset();
      })}
    >
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          id="description"
          type="text"
          className="form-control"
        />
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          {...register("amount", {valueAsNumber: true})}
          id="amount"
          type="number"
          className="form-control"
        />
        {errors.amount && (
          <p className="text-danger">{errors.amount.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="select" className="form-label">
          Category
        </label>
        <select {...register("category")} id="category" className="form-select">
          <option value=""></option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.category && (
          <p className="text-danger">{errors.category.message}</p>
        )}
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default ExpenseForm;
