import React, { useRef, useState } from 'react';
import locale from 'antd/es/date-picker/locale/fr_CA';
import { FiChevronDown } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import { DatePicker, Select, TimePicker } from 'antd';
import 'moment/locale/fr';
import SelectDateIcon from 'shared/inputicon/SelectDateIcon';
import moment from 'moment';
import {
  AddEditGuardContainer,
  AddEditGuardInputCont,
  AddEditGuardLabel,
  AddEditGuardTitle,
  AddGuardContainer,
  AddGuardOverlay,
  BottomPart,
  ButtonAddEdit,
  ButtonDelete,
  CloseButtonTopRight,
  ConfirmedStatusContainer,
  ConfirmedStatusRight,
  DeleteSvg,
  Option,
  SelectContLeft,
  SelectStatusContainer,
  SelectTimeContainer,
  SplitTimePicker,
  TopPart,
} from './Styles';
import { toggleDeleteGuard, toggleEditGuard } from 'features/toggleSlice';
import { useDispatch } from 'react-redux';

const Index = () => {
  // edit guard ref
  const editGuardRef = useRef(null);
  const [guard, setGuard] = useState({
    date: '',
    startTime: '',
    endTime: '',
    status: '',
  });
  //select option
  const { Option } = Select;
  //time format
  const format = 'HH:mm';
  //use dispatch
  const dispatch = useDispatch();

  //handle change date
  const handleChangeDate = (date, dateString) => {
    setGuard({ ...guard, date: dateString });
  };
  //handle change Start time
  const handleChangeStartTime = (startTime, startTimeString) => {
    setGuard({ ...guard, startTime: startTimeString });
  };
  //handle change Start time
  const handleChangeEndTime = (endTime, endTimeString) => {
    setGuard({ ...guard, endTime: endTimeString });
  };
  //handle change select status
  const handleChangeSelectStatus = (status) => {
    setGuard({ ...guard, status });
  };

  const handleClickOutside = (e) => {
    if (editGuardRef.current && e.target.contains(editGuardRef.current)) {
      dispatch(toggleEditGuard());
    }
  };

  //handle click on cancel button
  const handleCloseEditGuard = () => {
    dispatch(toggleEditGuard());
  };
  //handle click on delete icon in edit guard area
  const handleClickOnDelete = () => {
    dispatch(toggleEditGuard());
    dispatch(toggleDeleteGuard());
  };

  return (
    <AddGuardOverlay onClick={handleClickOutside}>
      <AddEditGuardContainer ref={editGuardRef}>
        <CloseButtonTopRight onClick={handleCloseEditGuard}>
          <MdClose size='25px' color='#636E72' />
        </CloseButtonTopRight>
        <TopPart>
          <AddEditGuardTitle>Modifier la garde</AddEditGuardTitle>
          <AddEditGuardInputCont>
            <AddEditGuardLabel>Date</AddEditGuardLabel>
            <DatePicker
              locale={locale}
              placeholder='Sélectioner une date'
              format='dddd, DD MMM YYYY'
              suffixIcon={<SelectDateIcon />}
              onChange={handleChangeDate}
            />
            <SelectTimeContainer>
              <TimePicker
                defaultValue={moment('12:08', format)}
                format={format}
                suffixIcon={<FiChevronDown />}
                onChange={handleChangeStartTime}
              />
              <SplitTimePicker>à</SplitTimePicker>
              <TimePicker
                defaultValue={moment('12:08', format)}
                format={format}
                suffixIcon={<FiChevronDown />}
                onChange={handleChangeEndTime}
              />
            </SelectTimeContainer>
            <SelectStatusContainer>
              <SelectContLeft>Status</SelectContLeft>
              <ConfirmedStatusContainer>
                <img src='/images/checked-icon.svg' alt='checked' />
                <ConfirmedStatusRight>confirmée</ConfirmedStatusRight>
              </ConfirmedStatusContainer>
              {/* when the response comes we gonna check if the guard is confirmed or not and then we gonna see if we gonna show the select or the confirmed status */}
              {/* <Select
                defaultValue='En attente'
                title='Select status'
                onChange={handleChangeSelectStatus}
              >
                <Option value='En attente'>En attente</Option>
                <Option value='Confirmée'>Confirmée</Option>
              </Select> */}
            </SelectStatusContainer>
          </AddEditGuardInputCont>
        </TopPart>

        <BottomPart>
          <ButtonDelete onClick={handleClickOnDelete}>
            <DeleteSvg />
          </ButtonDelete>
          <ButtonAddEdit regular={true} onClick={handleCloseEditGuard}>
            Annuler
          </ButtonAddEdit>
          <ButtonAddEdit>Confirmer</ButtonAddEdit>
        </BottomPart>
      </AddEditGuardContainer>
    </AddGuardOverlay>
  );
};

export default Index;
