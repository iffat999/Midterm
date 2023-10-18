import React from 'react';
import { useForm, Controller } from 'react-hook-form';

const SignUpUser = () => {
  const { control, handleSubmit, formState: { errors }, getValues } = useForm();

  const onSubmit = (data) => {
    // Validate passwords match
    if (data.password !== data.confirmPassword) {
      alert('Passwords do not match.');
    } else {
      // Validation passed, show alert and log data
      alert(JSON.stringify(getValues()));
      console.log(data);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name</label>
        <Controller
          name="firstName"
          control={control}
          rules={{ required: 'First Name is required' }}
          render={({ field }) => <input {...field} />}
        />
        {errors.firstName && <p>{errors.firstName.message}</p>}
      </div>

      <div>
        <label>Last Name</label>
        <Controller
          name="lastName"
          control={control}
          rules={{ required: 'Last Name is required' }}
          render={({ field }) => <input {...field} />}
        />
        {errors.lastName && <p>{errors.lastName.message}</p>}
      </div>

      <div>
        <label>Username</label>
        <Controller
          name="userName"
          control={control}
          rules={{ required: 'Username is required' }}
          render={({ field }) => <input {...field} />}
        />
        {errors.userName && <p>{errors.userName.message}</p>}
      </div>

      <div>
        <label>Email</label>
        <Controller
          name="email"
          control={control}
          rules={{
            required: 'Email is required',
            pattern: {
              value: /^\S+@\S+$/i,
              message: 'Invalid email format',
            },
          }}
          render={({ field }) => <input {...field} />}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div>
        <label>Password</label>
        <Controller
          name="password"
          control={control}
          rules={{ required: 'Password is required' }}
          render={({ field }) => <input type="password" {...field} />}
        />
      </div>

      <div>
        <label>Confirm Password</label>
        <Controller
          name="confirmPassword"
          control={control}
          rules={{ required: 'Confirm Password is required' }}
          render={({ field }) => <input type="password" {...field} />}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default SignUpUser;