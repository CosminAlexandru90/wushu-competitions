import React from 'react';

export const Onboarding: React.FC = () => {

  const submit=(e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());

    console.log("Submitted data:", data);
  }

    return (
        <div className={'flex flex-col w-screen min-h-screen p-2'}>
        <h1>Welcome to WUSHU COMPETITION!</h1>
          <p>You can enrool by filling in the following information:</p>
          <form className={'flex flex-col gap-2 w-80'} onSubmit={submit}>
            <input name={'firstname'} className={'border-2 p-2 rounded-md'} placeholder={'First name'} type="text" />
            <input name={'lastname'} className={'border-2 p-2 rounded-md'} placeholder={'Last name'} type="text" />
            <input name={'dateofbirth'} className={'border-2 p-2 rounded-md'} placeholder={'Date of birth'} type="date" />
            <input name={'club'} className={'border-2 p-2 rounded-md'} placeholder={'Club'} type="text" />
            <input name={'phone'} className={'border-2 p-2 rounded-md'} placeholder={'Phone'} type="tel" />
            <input name={'email'} className={'border-2 p-2 rounded-md'} placeholder={'Email'} type="email" />
            <button type={"submit"}>Submit</button>
          </form>
        </div>
    );
};