'use client';
import Link from 'next/link';
import { EmailInput, PasswordCheckInput, PasswordInput } from '../../../components/Inputs';
import { useForm } from 'react-hook-form';
import SocialBar from '@/components/SocialBar';

interface FormData {
  email: string;
  password: string;
  passwordCheck: string;
}

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ mode: 'onBlur' });

  const onSubmit = (data: any) => data;
  return (
    <div className="flex flex-col gap-8 w-full max-w-[400px]">
      <div className="flex justify-center items-center gap-2 mt-4">
        <p>회원이 아니신가요?</p>
        <Link className="text-primary font-semibold underline" href={'/signup'}>
          회원 가입하기
        </Link>
      </div>
      <form className="flex flex-col gap-6" action="" onSubmit={handleSubmit(onSubmit)}>
        <EmailInput register={register} errors={errors} />
        <PasswordInput register={register} errors={errors} />
        <button type="submit" className="btn">
          로그인
        </button>
      </form>
      <SocialBar>소셜로그인</SocialBar>
    </div>
  );
}
