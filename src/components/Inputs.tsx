export function EmailInput({ register, errors }: any) {
  return (
    <div className="flex flex-col justify-center items-start gap-3">
      <label htmlFor="">이메일</label>
      <input
        className="input w-full"
        type="email"
        placeholder="이메일을 입력해 주세요"
        {...register('email', {
          required: '이메일을 입력해주세요',
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

