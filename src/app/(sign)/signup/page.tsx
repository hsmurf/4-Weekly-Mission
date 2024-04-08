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
    watch,
    formState: { errors },
  } = useForm<FormData>({ mode: 'onBlur' });

  const onSubmit = (data: any) => data;
  return (
    <div className="flex flex-col gap-8 w-full max-w-[400px]">
      <div className="flex justify-center items-center gap-2 mt-4">
        <p>이미 회원이신가요?</p>
        <Link className="text-primary font-semibold underline" href={'/signin'}>
          로그인 하기
        </Link>
      </div>
      <form className="flex flex-col gap-6" action="" onSubmit={handleSubmit(onSubmit)}>
        <EmailInput register={register} errors={errors} />
        <PasswordInput register={register} errors={errors} />
        <PasswordCheckInput register={register} errors={errors} passwordValue={watch('password')} />
        <button type="submit" className="btn">
          회원가입
        </button>
      </form>
      <SocialBar>다른 방식으로 가입하기</SocialBar>
    </div>
  );
}
