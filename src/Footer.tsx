import { Stack } from "react-bootstrap";
// creating a footer for attributing icons
type Props = {
  bgColor: string;
};
export default function Footer({ bgColor }: Props) {
  return (
    <>
      <Stack
        gap={3}
        direction="horizontal"
        className="d-flex justify-content-center"
        style={{ backgroundColor: bgColor }}
      >
        <div>
          <a
            href="https://www.flaticon.com/free-icons/delete"
            title="delete icons"
            className="text-light"
          >
            Delete icons created by IYAHICON - Flaticon
          </a>
        </div>
        <div>
          <a
            href="https://www.flaticon.com/free-icons/edit"
            title="edit icons"
            className="text-light"
          >
            Edit icons created by Kiranshastry - Flaticon
          </a>
        </div>
        <div>
          <a 
            href="https://www.flaticon.com/free-icons/add" 
            title="add icons"
            className="text-light"
          >
            Add icons created by reussy - Flaticon
          </a>
        </div>
      </Stack>
    </>
  );
}
