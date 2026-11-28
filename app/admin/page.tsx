import { redirect } from 'next/navigation';

export default function AdminRoot() {
  // This automatically sends anyone visiting /admin to the login page
  redirect('/admin/login');
}