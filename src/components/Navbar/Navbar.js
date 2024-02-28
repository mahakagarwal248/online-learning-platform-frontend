import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { learnerId, PLATFORM_NAME } from "../../Constants";
import { useDispatch, useSelector } from "react-redux";
import { changemodalStep, changeShow } from "../../store/webSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { resetUser } from "../../store/userSlice";
import { useState } from "react";
import { logoutAxios } from "../../helpers/axiosApi";

const categoryData = [
  {
    title: "Category_1",
    categoryId: 1,
  },
  {
    title: "Category_2",
    categoryId: 2,
  },
  {
    title: "Category_3",
    categoryId: 3,
  },
  {
    title: "Category_4",
    categoryId: 4,
  },
];
function NavbarComp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [onToggle, setOnToggle] = useState(false);
  // const [isLoggedIn, setIsLoggedIn] = useState(true);
  const { id: isLoggedIn } = useSelector((state) => state.user.user);

  const handleClick = async () => {
    console.log("join now Click");

    dispatch(changeShow(true));
    dispatch(changemodalStep(1));
  };
  const handleLogout = async () => {
    await logoutAxios();
    dispatch(resetUser());
    navigate("/");
  };

  const handleNavItemClick = (path) => {
    setOnToggle(false);
    if (!path) return handleLogout();
    navigate(path);
  };
  const location = useLocation();
  const dashboardKey = location?.pathname?.split("/")[1];
  return (
    <Navbar
      onToggle={() => setOnToggle(!onToggle)}
      expanded={onToggle}
      collapseOnSelect
      expand="lg"
      className="sticky top-0 z-10 py-0 pl-4 pr-2 shadow-2xl bg-white h-16"
    >
      <Navbar.Brand
        onClick={() =>
          navigate(dashboardKey === "dashboard" ? "/dashboard" : "/")
        }
        className="cursor-pointer h-full flex items-center"
      >
        <img
          src="/assets/logo.png"
          alt=""
          className="h-10 w-10 mr-2 align-middle"
        />
        {PLATFORM_NAME}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="flex">
        <Nav
          className={`ml-auto h-full px-3 bg-white ${
            onToggle ? "w-44 shadow-allSide rounded-md" : "items-center"
          }`}
        >
          <Nav.Link href="/#home" className="text-primaryDark">
            Home
          </Nav.Link>
          <Nav.Link href="/#features" className="text-primaryDark">
            Features
          </Nav.Link>
          <Nav.Link href="/#about" className="text-primaryDark">
            About
          </Nav.Link>
          <NavDropdown
            title="Categories"
            id="collapsible-nav-dropdown"
            style={{
              "--bs-nav-link-color": "black",
              "--bs-nav-link-hover-color": "black",
              "--bs-nav-link-disabled-color": "black",
            }}
          >
            {categoryData &&
              categoryData.length > 0 &&
              categoryData.map((category, index) => {
                return (
                  <NavDropdown.Item
                    key={index}
                    onClick={() => navigate(`/${category.categoryId}/courses`)}
                  >
                    {category.title}
                  </NavDropdown.Item>
                );
              })}
          </NavDropdown>
          <Nav.Link href="/#courses" className="text-primaryDark">
            Popular Courses
          </Nav.Link>
          {isLoggedIn !== "" ? (
            <>
              {onToggle ? (
                <>
                  <Nav.Link
                    onClick={() => handleNavItemClick(`/${learnerId}/profile`)}
                    className="text-primaryDark"
                  >
                    Profile
                  </Nav.Link>
                  <Nav.Link
                    onClick={() =>
                      handleNavItemClick(`/${learnerId}/my-courses`)
                    }
                    className="text-primaryDark"
                  >
                    My Courses
                  </Nav.Link>
                  <Nav.Link
                    onClick={() => handleNavItemClick(`/${learnerId}/my-tests`)}
                    className="text-primaryDark"
                  >
                    My Tests
                  </Nav.Link>
                  <Nav.Link
                    onClick={() => handleNavItemClick("")}
                    className="text-primaryDark"
                  >
                    Logout
                  </Nav.Link>
                </>
              ) : (
                <NavDropdown
                  title={
                    <img
                      src="/assets/profile.png"
                      alt="profile"
                      className="h-8 w-8 inline"
                    />
                  }
                  id="collapsible-nav-dropdown"
                  style={{
                    "--bs-nav-link-color": "black",
                    "--bs-nav-link-hover-color": "black",
                    "--bs-nav-link-disabled-color": "black",
                  }}
                  drop="down"
                  align="end"
                  // className="w-28"
                >
                  <NavDropdown.Item onClick={() => {}}>
                    Profile
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => navigate(`/${learnerId}/my-courses`)}
                  >
                    My Courses
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => navigate(`/${learnerId}/my-tests`)}
                  >
                    My Tests
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={handleLogout}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              )}
            </>
          ) : (
            <>
              <Nav.Link
                // href="#about"
                className="h-full flex items-center !px-6 text-white bg-secondaryDark"
                onClick={handleClick}
              >
                Join Now
                <img
                  src="/assets/arrow-right.png"
                  alt=""
                  className="h-5 w-5 ml-2 align-middle"
                />
              </Nav.Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComp;

// -moz-box-shadow: 0 0 5px #749cac;
// -webkit-box-shadow: 0 0 5px #749cac;
// box-shadow: 0 0 5px #749cac;
