export type actionFunction = (
  prevState: any,
  formData: FormData
) => Promise<{ message: string }>;

type dDMLinks = {
  href: string;
  title: string;
};
export const DrpDwnLinks: dDMLinks[] = [
  { href: "/", title: "Home" },
  { href: "/myprofile", title: "My Profile" },
  { href: "/account", title: "Account" },
  
];
