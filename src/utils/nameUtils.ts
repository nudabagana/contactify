type makeFullNameProps = { name: string; surname: string };
export const makeFullName = ({ name, surname }: makeFullNameProps) => `${name} ${surname[0]}.`;
