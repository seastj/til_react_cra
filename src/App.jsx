import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import IndexPage from "./pages/Index";
import AboutPage from "./pages/about/About";
import MissionPage from "./pages/about/Mission";
import TeamPage from "./pages/about/Team";
import ServicePage from "./pages/service/Service";
import BlogPage from "./pages/blog/Blog";
import DetailPage from "./pages/blog/Detail";
import DesignPage from "./pages/blog/Design";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  // js
  const [islogin, setIsLogin] = useState(false);

  useEffect(() => {
    console.log(islogin);
  }, [islogin]);
  // jsx
  return (
    <Router>
      <Header
        company={"좋은 회사"}
        service={"Todo 서비스"}
        setIsLogin={setIsLogin}
      >
        <div>✌ 나는 자식입니다.</div>
        <div>🐱‍🐉 자식은 여러명 가능합니다.</div>
      </Header>
      <main>
        <Routes>
          <Route
            path="/"
            element={<IndexPage first={"첫 페이지 입니다."} />}
          ></Route>
          {/* About 관련 */}
          <Route path="/about">
            <Route index element={<AboutPage />}></Route>
            <Route path="mission" element={<MissionPage />}></Route>
            <Route path="team" element={<TeamPage />}></Route>
          </Route>

          <Route path="/service" element={<ServicePage></ServicePage>}></Route>

          {/* blog 관련 */}
          <Route path="/blog">
            <Route index element={<BlogPage />}></Route>

            {/* 중첩 겹침 */}
            <Route path="design">
              <Route path=":id" element={<DesignPage />}></Route>
              <Route path="detail" element={<DetailPage />}></Route>
            </Route>
          </Route>
          {/* 잘못된 경로 접근 처리 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer>
        {islogin ? <p>로그인 되었습니다.</p> : <p>로그아웃 되었습니다.</p>}
      </Footer>
    </Router>
  );
}

export default App;
