import {FormEvent, useRef, useState} from "react";

//? دو حالت ذخیره داده از اینپوت : useRef and useState

const FormEx = () => {
  // div.mb-3>label.form-label+input[type=number].form-control
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  //   const person = {name: "", age: 0};

  //useState and onChange
  const [person, setPerson] = useState({
    name: "",
    age: "",
  });
  const handelSubmit = (event: FormEvent) => {
    event.preventDefault();
    //if (nameRef.current !== null) person.name = nameRef.current.value;
    // if (ageRef.current !== null) person.age = parseInt(ageRef.current.value);
    console.log("submit data", person);
  };

  return (
    <form action="" onSubmit={handelSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          onChange={(event) => setPerson({...person, name: event.target.value})}
          value={person.name}
          ref={nameRef}
          id="name"
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          onChange={(event) => setPerson({...person, age: event.target.value})}
          value={person.age}
          ref={ageRef}
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default FormEx;

//?applying validation with useForm >> react hook form

// import {FormEvent, useRef, useState} from "react";
// import {FieldValues, useForm} from "react-hook-form"; //?

// interface FormData { //?
//   name: string;
//   age: number;
// }
// const Form = () => {
//   // div.mb-3>label.form-label+input[type=number].form-control

//   const {
//     register,
//     handleSubmit,
//     formState: {errors},
//   } = useForm<FormData>(); //?
//   const onSubmit = (data: FieldValues) => console.log(data);
//   // console.log(formState);

//   return (
//     <form action="" onSubmit={handleSubmit(onSubmit)}>
//       <div className="mb-3">
//         <label htmlFor="name" className="form-label">
//           Name
//         </label>
//         <input
//           {...register("name", {required: true, minLength: 3})}
//           id="name"
//           type="text"
//           className="form-control"
//         />
//         {errors.name?.type === "required" && (  //?
//           <p className="text-danger">the field name is required</p>
//         )}
//         {errors.name?.type === "minLength" && (
//           <p className="text-danger">the name must be at least 3 characters</p>
//         )}
//       </div>
//       <div className="mb-3">
//         <label htmlFor="age" className="form-label">
//           Age
//         </label>
//         <input
//           {...register("age")}
//           id="age"
//           type="number"
//           className="form-control"
//         />
//       </div>
//       <button className="btn btn-primary" type="submit">
//         Submit
//       </button>
//     </form>
//   );
// };

// export default Form;
