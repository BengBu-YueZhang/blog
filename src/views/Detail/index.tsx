import React from 'react';
import useLoadedEnd from '../../base/useLoadedEnd';
import './index.scss';
import Adsorption from '../../base/Adsorption';

const prefixClass = "yy-detail-view";

const Detail: React.FC = () => {

  useLoadedEnd();

  return (
    <div className={`${prefixClass}`}>
      {/* 封面图 */}
      <div className={`${prefixClass}-cover`}/>
      <div>
        {/* 标题 */}
        <Adsorption>
          <h1>ヱヴァンゲリヲン</h1>
        </Adsorption>
        {/* 内容 */}
        <div>
          <div>1</div>
          <hr />
          <div>2</div>
          <hr />
          <div>3</div>
          <hr />
          <div>4</div>
          <hr />
          <div>5</div>
          <hr />
          <div>6</div>
          <hr />
          <div>7</div>
          <hr />
          <div>8</div>
          <hr />
          <div>9</div>
          <hr />
          <div>10</div>
          <hr />
          <div>11</div>
          <hr />
          <div>12</div>
          <hr />
          <div>13</div>
          <hr />
          <div>14</div>
          <hr />
          <div>15</div>
          <hr />
          <div>16</div>
          <hr />
          <div>17</div>
          <hr />
          <div>18</div>
          <hr />
          <div>19</div>
          <hr />
          <div>20</div>
          <hr />
          <div>21</div>
          <hr />
          <div>22</div>
          <hr />
          <div>1</div>
          <hr />
          <div>2</div>
          <hr />
          <div>3</div>
          <hr />
          <div>4</div>
          <hr />
          <div>5</div>
          <hr />
          <div>6</div>
          <hr />
          <div>7</div>
          <hr />
          <div>8</div>
          <hr />
          <div>9</div>
          <hr />
          <div>10</div>
          <hr />
          <div>11</div>
          <hr />
          <div>12</div>
          <hr />
          <div>13</div>
          <hr />
          <div>14</div>
          <hr />
          <div>15</div>
          <hr />
          <div>16</div>
          <hr />
          <div>17</div>
          <hr />
          <div>18</div>
          <hr />
          <div>19</div>
          <hr />
          <div>20</div>
          <hr />
          <div>21</div>
          <hr />
          <div>22</div>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default Detail;
