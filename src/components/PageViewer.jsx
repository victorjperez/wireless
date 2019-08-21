import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


class PageViewer extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
  }

  onDocumentLoadSuccess = (document) => {
    const { numPages } = document;
    this.setState({
      numPages,
      pageNumber: 1,
    });
  };

  changePage = offset => this.setState(prevState => ({
    pageNumber: prevState.pageNumber + offset,
  }));

  previousPage = () => this.changePage(-1);

  nextSinglePage = () => this.changePage(1);
  nextDoublePage = () => this.changePage(2);
  
  render() {
    const { numPages, pageNumber } = this.state;
    let pdfWidth = document.documentElement.clientWidth;
    if (pdfWidth > 600 ) pdfWidth = pdfWidth/2;
    return (
      <React.Fragment>
        <Document
          file={this.props.pdf}
          onLoadSuccess={this.onDocumentLoadSuccess}
          loading={"Loading zine... Taking too long? Try again using lower quality."}
        >
          <Page pageNumber={pageNumber} width={pdfWidth}/>
          {pageNumber === 1 || pageNumber+1 > numPages? '' : (<Page  pageNumber={pageNumber+1} width={pdfWidth}/>)}
        </Document>
        <footer>
          <h1>
           {pageNumber || (numPages ? 1 : '--')} / {numPages || '--'}

          </h1>
          <button
            type="button"
            disabled={pageNumber <= 1}
            onClick={this.previousPage}
          >
            Previous
          </button>
          {pageNumber === 1 ? 
          (<button
            type="button"
            disabled={pageNumber >= numPages}
            onClick={this.nextSinglePage}
          >
            Next
          </button>) :
          (<button
            type="button"
            disabled={pageNumber >= numPages}
            onClick={this.nextDoublePage}
          >
            Next
          </button>)}
        </footer>
      </React.Fragment>
    );
  }
}
export default PageViewer;