export function EmailInput({ register, errors }: any) {
  return (
    <div className="flex flex-col justify-center items-start gap-3">
      <label htmlFor="">이메일</label>
      <input
        className="input w-full"
        type="email"
        placeholder="이메일을 입력해 주세요"
        {...register('email', {
          required: '이메일을 입력해주세요.',
          pattern: {
            value: /^[A-Z0-9]+@[A-Z0-9]+\.[A-Z]{2,}$/i,
            message: '올바른 이메일 주소가 아닙니다.',
          },
        })}
      />
      {<p className="text-sm text-red">{errors?.email?.message}</p>}
    </div>
  );
}

export function PasswordInput({ register, errors }: any) {
  return (
    <div className="flex flex-col justify-center items-start gap-3">
      <label htmlFor="">비밀번호</label>
      <input
        className="input w-full"
        type="password"
        placeholder="영문,숫자를 조합해 8자 이상 입력해 주세요"
        {...register('password', {
          required: '비밀번호를 입력해 주세요.',
          pattern: {
            value: /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/,
            message: '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.',
          },
        })}
      />
      {<p className="text-sm text-red">{errors?.password?.message}</p>}
    </div>
  );
}

export function PasswordCheckInput({ register, errors, passwordValue }: any) {
  return (
    <div className="flex flex-col justify-center items-start gap-3">
      <label htmlFor="">비밀번호</label>
      <input
        className="input w-full"
        type="password"
        placeholder="영문,숫자를 조합해 8자 이상 입력해 주세요"
        {...register('passwordCheck', {
          required: true,
          validate: (value: any) => value === passwordValue || '비밀번호가 일치하지 않아요.',
        })}
      />
      {<p className="text-sm text-red">{errors?.passwordCheck?.message}</p>}
    </div>
  );
}
