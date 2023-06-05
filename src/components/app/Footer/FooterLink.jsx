export default function FooterLink({ text, href }) {
  return (
    <li className="page-footer-link">
      <a target="_blank" href={href} className="mr-4 md:mr-6 ">{text}</a>
    </li>
  );
}