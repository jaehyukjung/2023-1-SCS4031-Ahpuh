import React from "react";
import { useState } from "react";
import './Member.css';
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';
function Member(){
    const [members, setMembers] = useState([]);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [birth, setBirth] = useState('');
    const [guardian, setGuardian] = useState('');
    const [checkedItems, setCheckedItems] = useState([]);
    const navigate = useNavigate();
    const handleCheckboxChange = (event, item) => {
        if (event.target.checked) {
        setCheckedItems([...checkedItems, item]);
        } else {
        const updatedItems = checkedItems.filter((checkedItem) => checkedItem !== item);
        setCheckedItems(updatedItems);
        }
    };

    const addMember = (e) => {
      e.preventDefault();
  
      // 입력 값 유효성 검사
      if (name.trim() === '' || age.trim() === '' || gender.trim() === '') {
        alert('모든 필드를 입력해주세요.');
        return;
      }

      const newMember = {
        id: members.length + 1,
        name: name,
        phone: phone,
        age: age,
        gender: gender,
        birth: birth,
        guardian: guardian
      };
      setMembers([...members, newMember]);
      setName('');
      setPhone('');
      setAge('');
      setGender('');
      setBirth('');
      setGuardian('');
    };
  
    const deleteMember = (id) => {
      const updatedMembers = members.filter(member => member.id !== id);
      setMembers(updatedMembers);
    };
    const handleCallButton = () => {
      Swal.fire({
          title: "안전 사고 연락",
          text: "보호자에게 연락하시겠습니까?",
          icon: "success",
          showCancelButton: true,
          confirmButtonText: "확인",
          cancelButtonText: "취소",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/realswim");
        }
      })
  };
  
    return (
      <div>
        <h1>회원 관리 페이지</h1>
  
        <form onSubmit={addMember}>
          <input
            type="text"
            placeholder="이름"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            type="tel"
            placeholder="전화번호"
            value={phone}
            onChange={e => setPhone(e.target.value)}
          />
          <input
            type="text"
            placeholder="나이"
            value={age}
            onChange={e => setAge(e.target.value)}
          />
          <input
            type="text"
            placeholder="성별"
            value={gender}
            onChange={e => setGender(e.target.value)}
          />
          <input
            type="date"
            placeholder="생년월일"
            value={birth}
            onChange={e => setBirth(e.target.value)}
          />
          <input
            type="tel"
            placeholder="보호자 연락처"
            value={guardian}
            onChange={e => setGuardian(e.target.value)}
          />
          <button type="submit">추가</button>
        </form>
        <br></br><br></br>
        <table style={{width:"60%"}}>
          <thead>
            <tr>
                <th>체크</th>
                <th>이름</th>
                <th>나이</th>
                <th>전화번호</th>
                <th>성별</th>
                <th>생년월일</th>
                <th>보호자</th>
                <th>연락</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
              <input type="checkbox" checked={checkedItems.includes('item1')} onChange={(event) => handleCheckboxChange(event, 'item1')}/>
              </td>
              <td>정재혁</td>
              <td>01092623640</td>
              <td>25</td>
              <td>남</td>
              <td>1999.11.22</td>
              <td>01092213455</td>
              <td><button onClick={handleCallButton}>전화</button></td>
            </tr>
            <tr>
              <td>
              <input type="checkbox" checked={checkedItems.includes('item2')} onChange={(event) => handleCheckboxChange(event, 'item2')}/>
              </td>
              <td>이여원</td>
              <td>01015642348</td>
              <td>23</td>
              <td>여</td>
              <td>2001.07.25</td>
              <td>01092213455</td>
              <td><button onClick={handleCallButton}>전화</button></td>
            </tr>
            <tr>
              <td>
              <input type="checkbox" checked={checkedItems.includes('item3')} onChange={(event) => handleCheckboxChange(event, 'item3')}/>
              </td>
              <td>백채연</td>
              <td>01092654550</td>
              <td>24</td>
              <td>여</td>
              <td>2000.04.22</td>
              <td>01092213455</td>
              <td><button onClick={handleCallButton}>전화</button></td>
            </tr>
            <tr>
              <td>
              <input type="checkbox" checked={checkedItems.includes('item4')} onChange={(event) => handleCheckboxChange(event, 'item4')}/>
              </td>
              <td>양지우</td>
              <td>01095563640</td>
              <td>24</td>
              <td>여</td>
              <td>2000.11.22</td>
              <td>01092213455</td>
              <td><button onClick={handleCallButton}>전화</button></td>
            </tr>
            <tr>
              <td>
              <input type="checkbox" checked={checkedItems.includes('item5')} onChange={(event) => handleCheckboxChange(event, 'item5')}/>
              </td>
              <td>안도현</td>
              <td>01092623640</td>
              <td>24</td>
              <td>여</td>
              <td>2000.08.22</td>
              <td>01092213455</td>
              <td><button onClick={handleCallButton}>전화</button></td>
            </tr>
            {members.map(member => (
              <tr key={member.id}>
                <td>
                    <input type="checkbox" checked={checkedItems.includes('item6')} onChange={(event) => handleCheckboxChange(event, 'item6')}/>
                </td>
                <td>{member.name}</td>
                <td>{member.phone}</td>
                <td>{member.age}</td>
                <td>{member.gender}</td>
                <td>{member.birth}</td>
                <td>{member.guardian}</td>
                <td>
                  <button onClick={() => deleteMember(member.id)}>삭제</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

export default Member;