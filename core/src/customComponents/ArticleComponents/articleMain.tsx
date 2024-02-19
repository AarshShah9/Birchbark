"use client";

import { api } from "~/utils/api";
import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import { BsArrowLeft } from "react-icons/bs";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Loading from "~/customComponents/Loading";

// pdfjs worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const article = () => {
  const [loading, setLoading] = useState(true);
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: any }) => {
    setLoading(false);
    setNumPages(numPages);
  };

  const router = useRouter();
  const articleId = router.query.id;
  const {
    data: contentUrl,
    error,
    isLoading,
  } = api.wiki.getArticleContent.useQuery(
    { id: Number(articleId) },
    {
      // This ensures the query doesn't run until articleId is defined
      enabled: !!articleId,
    }
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className="relative flex h-[95vh] w-full overflow-auto bg-white font-inter text-[#141718]">
        <motion.div
          whileHover={{
            scale: [null, 1.03, 1.02],
            transition: { duration: 0.5 },
          }}
          whileTap={{
            scale: 0.98,
            transition: { duration: 0.75 },
          }}
          className="fixed left-96 top-14 z-10 flex h-14 w-14 cursor-pointer rounded-md border-[1px] border-black bg-white hover:shadow-lg xl:left-32 md:left-9 md:top-9 md:h-9 md:w-9"
        >
          <a
            className="flex h-full w-full items-center justify-center"
            onClick={() => router.back()}
          >
            <BsArrowLeft className="flex h-[85%] w-[85%]" />
          </a>
        </motion.div>
        <Document file={contentUrl} onLoadSuccess={onDocumentLoadSuccess}>
          {Array.from(new Array(numPages), (el, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              scale={1.5}
            />
          ))}
        </Document>
      </div>
    </>
  );
};

export default article;
