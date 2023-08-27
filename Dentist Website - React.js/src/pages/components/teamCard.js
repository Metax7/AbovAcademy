import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";

export default function TeamCard(props) {
  return (
    <>
      <div className="">
        <Card className="sm:w-full md:w-80 lg:w-96">
          <CardHeader floated={false} className="h-80">
            <img
              src={props.cardImg}
              className="w-full object-cover max-md:h-full"
              alt=""
            />
          </CardHeader>
          <CardBody className="text-center">
            <Typography
              variant="h4"
              className="mb-2 text-main-color font-bold hover:text-main2-color transition-all duration-200 cursor-pointer"
            >
              {props.name}
            </Typography>
            <Typography color="blue" className="font-medium" textGradient>
              {props.profession}
            </Typography>
          </CardBody>
          <CardFooter className="flex justify-center gap-7 pt-2">
            <Tooltip content="Like">
              <Typography
                as="a"
                href="#facebook"
                variant="lead"
                color="blue"
                textGradient
              >
                <div className="text-main2-color bg-blue-100 p-4 rounded-full">
                  {props.social1}
                </div>
              </Typography>
            </Tooltip>
            <Tooltip content="Follow">
              <Typography
                as="a"
                href="#twitter"
                variant="lead"
                color="light-blue"
                textGradient
              >
                <div className="text-main2-color bg-blue-100 p-4 rounded-full">
                  {props.social2}
                </div>
              </Typography>
            </Tooltip>
            <Tooltip content="Follow">
              <Typography
                as="a"
                href="#instagram"
                variant="lead"
                color="purple"
                textGradient
              >
                <div className="text-main2-color bg-blue-100 p-4 rounded-full">
                  {props.social3}
                </div>
              </Typography>
            </Tooltip>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
