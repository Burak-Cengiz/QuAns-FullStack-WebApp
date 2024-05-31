import React, { useEffect,useState } from "react";
import "../../css/styles/main/Question/questionlist.css";
import { RxAvatar } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { useLocation,useNavigate,Link  } from "react-router-dom";
import * as questionActions from "../../redux/actions/questionActions";
import Pagination from "./Pagination"; // Pagination bileşenini import etmeyi unutmayın

const QuestionList = () => {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questionListReducer);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const page = searchParams.get("page");
  const [totalPages, setTotalPages] = useState(4);
  const navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault();
    navigate("/askquestion");
  };
  useEffect(() => {
    dispatch(questionActions.getQuestions(page));
  }, [dispatch, page]);

  useEffect(() => {
    if (questions && questions.totalPages) { 
      setTotalPages(questions.totalPages);
    }
  }, [questions]);
  
  return (
    <div className="d-flex question-list-main">
      <div className="main with-line col-12">
        <div className="d-flex justify-content-between align-items-start">
          <div className="flex-item">
            <h1>New Questions</h1>
          </div>
          <div className="flex-item">
            <a href="/askquestion" onClick={handleClick} className="btn btn-primary">
              Ask Question
            </a>
          </div>
        </div>
        <div className="flush-left">
          <div id="">
            <ul className="list-group list-group-flush">
              {questions.data && questions.data.length > 0 ? (
                questions.data.map((question) => (
                  <li key={question._id} className="list-group-item">
                    <div className="post-summary d-flex">
                      <div className="post-summary-stats d-flex col-2 flex-column">
                        <div className="post-summary-stats-item d-flex">
                          <span className="post-summary-stats-item-number">
                            {question.likeCount}
                          </span>
                          <span className="post-summary-stats-item-unit">
                            likes
                          </span>
                        </div>
                        <div className="post-summary-stats-item d-flex">
                          <span className="post-summary-stats-item-number">
                            {question.answerCount}
                          </span>
                          <span className="post-summary-stats-item-unit">
                            answers
                          </span>
                        </div>
                      </div>
                      <div className="post-summary-content col-10 d-flex flex-column">
                        <h5 className="post-summary-content-title">
                          <Link href="#">{question.title}</Link>
                        </h5>
                        <div className="post-summary-content-meta d-flex">
                          <div className="post-summary-content-meta-tags d-flex">
                            <div className="post-summary-content-p">
                              {question.content}
                            </div>
                          </div>
                          <div className="post-summary-content-meta-usercard d-flex">
                            <Link href="#" className="meta-usercard-avatar">
                              <RxAvatar />
                            </Link>
                            <div className="meta-usercard-userlink">
                              <Link href="#">{question.user.name}</Link>
                            </div>

                            <time className="meta-usercard-time">
                              {question.createdAt}
                            </time>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))
              ) : (
                <li className="list-group-item">No questions available</li>
              )}
            </ul>
          </div>
        </div>
        <div className="pagination d-flex">
          <Pagination totalPages={totalPages} currentPage={page} />
        </div>
      </div>
    </div>
  );
};

export default QuestionList;
