"use client";

import { api } from "~/utils/api";
import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
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
      <div className="relative flex h-[100vh] w-full overflow-auto bg-white font-inter text-[#141718]">
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
