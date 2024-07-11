import { Breadcrumb, BreadcrumbItem, BreadcrumbSeparator, BreadcrumbLink } from "@chakra-ui/react";
const Breadcrumbs = ({link}) => {


    return (
        <Breadcrumb>
            <BreadcrumbItem>
                <BreadcrumbLink href='/'>Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
                <BreadcrumbLink href='/recipes'>Recipes</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href='#'>{link}</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
    );
  };
  
  export default Breadcrumbs;
  