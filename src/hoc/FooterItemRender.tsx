interface FooterColumnProps {
  items: string[];
}

const FooterColumn = ({ items }: FooterColumnProps) => {
  return (
    <>
      {items.map((item, index) => (
        <p key={index} className="my-3 text-xl">
          {item}
        </p>
      ))}
    </>
  );
};

export default FooterColumn;
