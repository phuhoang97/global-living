import {
  CheckCircleOutlined,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { Drawer, message, Popconfirm, Table, Tooltip } from "antd";
import jwtDecode from "jwt-decode";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  deleteDataHomePage,
  getAllDataHomePage,
  updateDataHomePage,
} from "../../../../../apis/home/api";
import PermissionButton from "../../../../../common/permissions/button";
import { columnsComment } from "../../comment/list/columns";
import AdminCMSCommentServices from "../../comment/services";
import { columnsVideo } from "../../video/list/columns";
import AdminCMSVideoServices from "../../video/services";
import { columnsBanner } from "../../banner/list/columns";
import { columnsOverview } from "../../overview/list/columns";
import { columnsBrandPosition } from "../../brandPosition/list/columns";
import { columnsInvest } from "../../invest/list/columns";
import { columnsMission } from "../../mission/list/columns";
import { columnsVission } from "../../vision/list/columns";
import AdminCMSBannerServices from "../../banner/services";
import AdminCMSOverviewServices from "../../overview/services";
import AdminCMSBrandPositionServices from "../../brandPosition/services";
import AdminCMSInvestServices from "../../invest/services";
import AdminCMSVisionServices from "../../vision/services";
import AdminCMSMissionServices from "../../mission/services";
import { columnsLocation } from "../../location/list/columns";
import AdminCMSLocationServices from "../../location/services";

const AdminCMSList = () => {
  const token = localStorage.getItem("token");
  const decode = jwtDecode(token);
  const hasPermission = decode?.role === 1 || decode?.role === 2;
  const { pathname } = useLocation();
  const pathnameSplit = pathname.split("/");
  const endpoint = pathnameSplit[pathnameSplit?.length - 1];
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [reloadData, setReloadData] = useState(false);
  const [id, setId] = useState(0);

  const usingItem = (id, data) => {
    updateDataHomePage(id, data)
      .then(() => {
        message.success("Sử dụng địa chỉ thành công!");
      })
      .catch(() => {});
  };

  const mapData = (data) => {
    if (!data || data?.length <= 0) return [];
    return data?.map((item) => {
      return {
        ...item,
        key: item?.id,
        img: (
          <div className="flex items-center gap-[20px]">
            {item?.img?.map((i) => {
              return <img src={i} alt="image" className="w-[200px]" />;
            })}
          </div>
        ),
        action: hasPermission ? (
          <div className="w-full flex items-center justify-center">
            <Popconfirm
              title="Xóa?"
              onConfirm={() => onDelete(item?.id)}
              okText="Đồng ý"
              cancelText="Hủy"
            >
              <DeleteOutlined className="cursor-pointer" />
            </Popconfirm>
            <EditOutlined
              className="cursor-pointer mx-3"
              onClick={() => {
                setId(item?.id);
                setOpen(true);
              }}
            />
            {/* {item?.title === "location" ? (
							<Tooltip title="Sử dụng">
								<CheckCircleOutlined
									onClick={() =>
										usingItem(item?.id, {
											...item,
											video: "used",
										})
									}
								/>
							</Tooltip>
						) : null} */}
          </div>
        ) : (
          <></>
        ),
      };
    });
  };

  const onDelete = (id) => {
    deleteDataHomePage(id)
      .then(() => {
        message.success("Xóa thành công!");
        setReloadData(true);
      })
      .catch(() => {
        message.error("Xóa thất bại!");
      });
  };

  const getData = () => {
    setLoading(true);
    getAllDataHomePage()
      .then((response) => {
        setDataSource(
          mapData(response?.data?.filter((item) => item?.title === endpoint))
        );
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setId(0);
  };

  useEffect(() => {
    getData();
  }, [endpoint]);

  useEffect(() => {
    if (reloadData) {
      getData();
    }

    return () => {
      setReloadData(false);
    };
  }, [reloadData]);

  const checkTypeColumns = () => {
    switch (endpoint) {
      case "banner":
        return columnsBanner;
      case "realState":
        return columnsOverview;
      case "brandPosition":
        return columnsBrandPosition;
      case "invest":
        return columnsInvest;
      case "vision":
        return columnsVission;
      case "mission":
        return columnsMission;
      case "video":
        return columnsVideo;
      case "comment":
        return columnsComment;
      case "location":
        return columnsLocation;
      // case "information":
      //   return columnsInformation;
      default:
        break;
    }
  };

  const checkTypeService = () => {
    switch (endpoint) {
      case "banner":
        return (
          <AdminCMSBannerServices
            id={id}
            closeDrawer={handleClose}
            setReloadData={setReloadData}
          />
        );
      case "realState":
        return (
          <AdminCMSOverviewServices
            id={id}
            closeDrawer={handleClose}
            setReloadData={setReloadData}
          />
        );
      case "brandPosition":
        return (
          <AdminCMSBrandPositionServices
            id={id}
            closeDrawer={handleClose}
            setReloadData={setReloadData}
          />
        );
      case "invest":
        return (
          <AdminCMSInvestServices
            id={id}
            closeDrawer={handleClose}
            setReloadData={setReloadData}
          />
        );
      case "vision":
        return (
          <AdminCMSVisionServices
            id={id}
            closeDrawer={handleClose}
            setReloadData={setReloadData}
          />
        );
      case "mission":
        return (
          <AdminCMSMissionServices
            id={id}
            closeDrawer={handleClose}
            setReloadData={setReloadData}
          />
        );
      case "video":
        return (
          <AdminCMSVideoServices
            id={id}
            closeDrawer={handleClose}
            setReloadData={setReloadData}
          />
        );
      case "comment":
        return (
          <AdminCMSCommentServices
            id={id}
            closeDrawer={handleClose}
            setReloadData={setReloadData}
          />
        );
      case "location":
        return (
          <AdminCMSLocationServices
            id={id}
            closeDrawer={handleClose}
            setReloadData={setReloadData}
          />
        );
      // case "information":
      //   return (
      //     <AdminCMSInformationServices
      //       id={id}
      //       closeDrawer={handleClose}
      //       setReloadData={setReloadData}
      //     />
      //   );
      default:
        break;
    }
  };

  return (
    <>
      <PermissionButton onClick={handleOpen} isShow={hasPermission} />
      <Table
        columns={checkTypeColumns()}
        dataSource={dataSource}
        loading={loading}
      />
      <Drawer
        open={open}
        title={id ? "Cập nhật" : "Thêm mới"}
        onClose={handleClose}
        destroyOnClose
        width={600}
      >
        {checkTypeService()}
      </Drawer>
    </>
  );
};

export default AdminCMSList;
