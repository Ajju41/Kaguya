import TraceImageSearch from "@/components/features/trace/TraceImageSearch";
import TracePanel from "@/components/features/trace/TracePanel";
import Button from "@/components/shared/Button";
import Head from "@/components/shared/Head";
import Loading from "@/components/shared/Loading";
import { TraceImageResponse } from "@/hooks/useTraceImage";
import React, { useState } from "react";
import { MdOutlineRestartAlt } from "react-icons/md";

const TracePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [traceResult, setTraceResult] =
    // @ts-ignore
    useState<TraceImageResponse>(null);

  const handleOnSearch = async (result: TraceImageResponse) => {
    setTraceResult(result);
    setIsLoading(false);
  };

  const handleOnLoading = async () => {
    setIsLoading(true);
  };

  const handleReset = () => {
    setTraceResult(null);
    setIsLoading(false);
  };

  return (
    <React.Fragment>
      <Head title="Tìm kiếm Anime qua hình ảnh - Kaguya" />

      <div className="pt-20 px-4 md:px-12 space-y-16 flex flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-1">
            Công cụ tìm kiếm Anime bằng hình ảnh.
          </h1>

          <h3 className="text-lg mb-2">
            Nó cho bạn biết anime, tập và khoảnh khắc mà hình ảnh đó xuất hiện!
          </h3>

          <p className="italic mb-1">
            Công cụ sử dụng công nghệ tìm kiếm của{" "}
            <a
              className="text-primary-300 hover:underline"
              href="https://github.com/soruly/trace.moe"
            >
              trace.moe
            </a>
          </p>

          <p className="italic">
            Lưu ý: Kết quả tìm kiếm không hoàn toàn chính xác 100%.
          </p>
          <p className="italic">Lưu ý: Chỉ sử dụng hình ảnh trong phim.</p>
        </div>

        {traceResult ? (
          <React.Fragment>
            <Button
              primary
              onClick={handleReset}
              LeftIcon={MdOutlineRestartAlt}
            >
              <p>Thử ảnh khác</p>
            </Button>

            <TracePanel data={traceResult} />
          </React.Fragment>
        ) : isLoading ? (
          <Loading />
        ) : (
          <TraceImageSearch
            onSearch={handleOnSearch}
            onLoading={handleOnLoading}
          />
        )}
      </div>
    </React.Fragment>
  );
};

export default TracePage;
