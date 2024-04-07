import Image from 'next/image';
import { useState } from 'react';

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
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <div className="flex flex-col justify-center items-start gap-3">
      <label htmlFor="">비밀번호</label>
      <div className="w-full relative">
        <input
          className="input w-full"
          type={showPassword ? 'text' : 'password'}
          placeholder="영문,숫자를 조합해 8자 이상 입력해 주세요"
          {...register('password', {
            required: '비밀번호를 입력해 주세요.',
            pattern: {
              value: /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/,
              message: '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.',
            },
          })}
        />
        <button
          className="absolute top-[22px] right-[15px]"
          onClick={() => setShowPassword(!showPassword)}
          type={'button'}>
          {showPassword ? (
            <Image src={'/assets/icons/eye-on.svg'} width={20} height={20} alt="비밀번호 보이기" />
          ) : (
            <Image src={'/assets/icons/eye-off.svg'} width={20} height={20} alt="비밀번호 숨기기" />
          )}
        </button>
      </div>
      {<p className="text-sm text-red">{errors?.password?.message}</p>}
    </div>
  );
}

export function PasswordCheckInput({ register, errors, passwordValue }: any) {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <div className="flex flex-col justify-center items-start gap-3">
      <label htmlFor="">비밀번호</label>
      <div className="w-full relative">
        <input
          className="input w-full"
          type={showPassword ? 'text' : 'password'}
          placeholder="영문,숫자를 조합해 8자 이상 입력해 주세요"
          {...register('passwordCheck', {
            required: true,
            validate: (value: any) => value === passwordValue || '비밀번호가 일치하지 않아요.',
          })}
        />
        <button
          className="absolute top-[22px] right-[15px]"
          onClick={() => setShowPassword(!showPassword)}
          type={'button'}>
          {showPassword ? (
            <Image src={'/assets/icons/eye-on.svg'} width={20} height={20} alt="비밀번호 보이기" />
          ) : (
            <Image src={'/assets/icons/eye-off.svg'} width={20} height={20} alt="비밀번호 숨기기" />
          )}
        </button>
      </div>
      {<p className="text-sm text-red">{errors?.passwordCheck?.message}</p>}
    </div>
  );
}
