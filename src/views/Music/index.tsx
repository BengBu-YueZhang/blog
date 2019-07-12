import React, { useRef } from 'react';
import useLoadedEnd from '../../base/useLoadedEnd';
import useObserverViewPortScroll from '../../base/useObserverViewPortScroll';
import Adsorption from '../../base/Adsorption';

const Music: React.FC = () => {

  const ele = useRef<HTMLDivElement>(null);

  useLoadedEnd();

  useObserverViewPortScroll<HTMLDivElement>(ele, () => {
    console.log('看见我了');
  }, () => {
    console.log('没有看见我');
  });

  return (
    <div>
      <div>1</div>
      <hr/>
      <div>2</div>
      <hr/>
      <div>3</div>
      <hr/>
      <div>4</div>
      <hr/>
      <div>5</div>
      <hr/>
      <div>6</div>
      <hr/>
      <div>7</div>
      <hr/>
      <div>8</div>
      <hr/>
      <div>9</div>
      <hr/>
      <div>10</div>
      <hr/>
      <div>11</div>
      <hr/>
      <div>12</div>
      <hr/>
      <div>13</div>
      <hr/>
      <div>14</div>
      <hr/>
      <div>15</div>
      <hr/>
      <div>16</div>
      <hr/>
      <div>17</div>
      <hr/>
      <div>18</div>
      <hr/>
      <div>19</div>
      <hr/>
      <div>20</div>
      <hr/>
      <div>21</div>
      <hr/>
      <div>22</div>
      <hr/>
      <Adsorption>
        <div ref={ele}>HelloWorld</div>
      </Adsorption>
      <hr/>
      <div>23</div>
      <hr/>
      <div>24</div>
      <hr/>
      <div>25</div>
      <hr/>
      <div>26</div>
      <hr/>
      <div>27</div>
      <hr/>
      <div>28</div>
      <hr/>
      <div>29</div>
      <hr/>
      <div>30</div>
      <hr/>
      <div>31</div>
      <hr/>
      <div>32</div>
      <hr/>
      <div>33</div>
      <hr/>
      <div>34</div>
      <hr/>
      <div>35</div>
      <hr/>
      <div>36</div>
      <hr/>
      <div>37</div>
      <hr/>
      <div>38</div>
      <hr/>
      <div>39</div>
      <hr/>
      <div>40</div>
      <hr/>
      <div>41</div>
      <hr/>
      <div>42</div>
      <hr/>
      <div>43</div>
      <hr/>
      <div>44</div>
      <hr/>
      <div>45</div>
      <hr/>
      <div>46</div>
      <hr/>
      <div>47</div>
      <hr />
      <div>48</div>
      <hr />
      <div>49</div>
      <hr />
      <div>50</div>
      <hr />
      <div>51</div>
      <hr/>
      <div>52</div>
      <hr/>
      <div>53</div>
      <hr />
      <div>54</div>
      <hr />
      <div>55</div>
      <hr />
      <div>56</div>
      <hr />
      <div>57</div>
      <hr />
      <div>58</div>
      <hr />
      <div>59</div>
      <hr />
      <div>60</div>
      <hr />
      <div>61</div>
      <hr />
      <div>62</div>
      <hr />
      <div>63</div>
      <hr />
      <div>64</div>
      <hr />
      <div>65</div>
      <hr />
      <div>66</div>
      <hr />
      <div>67</div>
      <hr />
      <div>68</div>
      <hr />
      <div>69</div>
      <hr />
    </div>
  )
}

export default Music;
