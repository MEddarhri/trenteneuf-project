import React, { useState, useRef } from 'react';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import {
  ButtonEditAndDelete,
  Container,
  DateInRightPart,
  DateOfGuardLeft,
  DayLeftPart,
  EditAndDelete,
  GuardButton,
  GuardTimeBtnRightPart,
  GuardTimeLeftPart,
  LeftPart,
  RightPart,
  TimeFromTo,
  TimeFromToContainer,
} from './Styles';
import { useHandleClickOutside } from 'hooks/useHandleClickOutside';
import { toggleDeleteGuard, toggleEditGuard } from 'features/toggleSlice';
import { useDispatch } from 'react-redux';

const Index = ({ pending }) => {
  const [showEditAndDelete, setShowEditAndDelete] = useState(false);
  //useDispatch
  const dispatch = useDispatch();
  //refs
  const buttonRefEdit = useRef(null);
  const editAndDeleteRef = useRef(null);
  //handle Click Outside
  useHandleClickOutside(editAndDeleteRef, buttonRefEdit, setShowEditAndDelete);

  //handle show edit and delete

  const handleShowEditAndDelete = () => {
    setShowEditAndDelete((prev) => !prev);
  };
  //handle click on edit guard
  const handleClickEdit = () => {
    dispatch(toggleEditGuard());
  };

  return (
    <Container>
      <LeftPart>
        <DayLeftPart>DIM</DayLeftPart>
        <DateOfGuardLeft>08</DateOfGuardLeft>
      </LeftPart>
      <RightPart pending={pending}>
        <GuardTimeLeftPart>
          <DateInRightPart>Dimanche 8 mai 2022</DateInRightPart>
          <TimeFromToContainer>
            <img src='/images/clock-icon.svg' />
            <TimeFromTo>09:00 - 19:00</TimeFromTo>
          </TimeFromToContainer>
        </GuardTimeLeftPart>
        <GuardTimeBtnRightPart>
          <GuardButton
            pending={pending}
            onClick={handleShowEditAndDelete}
            ref={buttonRefEdit}
          >
            <BiDotsVerticalRounded color='#fff' size='25px' />
            {showEditAndDelete && (
              <EditAndDelete ref={editAndDeleteRef}>
                <ButtonEditAndDelete onClick={handleClickEdit}>
                  Modifier
                </ButtonEditAndDelete>
                <ButtonEditAndDelete
                  onClick={() => dispatch(toggleDeleteGuard())}
                >
                  Supprimer
                </ButtonEditAndDelete>
              </EditAndDelete>
            )}
          </GuardButton>
        </GuardTimeBtnRightPart>
      </RightPart>
    </Container>
  );
};

export default Index;
