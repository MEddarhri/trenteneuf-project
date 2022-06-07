import React, { useRef, useState } from 'react';
import locale from 'antd/es/date-picker/locale/fr_CA';
import Notif from 'shared/notificationAddEdit';
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
  CloseButtonTopRight,
  Option,
  SelectContLeft,
  SelectStatusContainer,
  SelectTimeContainer,
  SplitTimePicker,
  TopPart,
} from './Styles';
import { toggleAddGuard } from 'features/toggleSlice';
import { useDispatch, useSelector } from 'react-redux';

const Index = () => {
  //get the date of the guard to add if exists
  const dateOfTheGuardToAdd = useSelector(
    (state) => state.guard.guardToAdd.date
  );
  //addGuard container ref
  const addGuardRef = useRef(null);
  //guard data
  const [guard, setGuard] = useState({
    date: new Date(),
    startTime: '',
    endTime: '',
    status: '',
  });
  //dispatch
  const dispatch = useDispatch();
  //select option
  const { Option } = Select;
  //time format
  const format = 'HH:mm';

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

  //close when click Outside
  const handleClickOutside = (e) => {
    if (addGuardRef.current && e.target.contains(addGuardRef.current)) {
      dispatch(toggleAddGuard());
    }
  };

  //handle click on cancel button
  const handleCloseAddTask = () => {
    dispatch(toggleAddGuard());
  };
  return (
    <AddGuardOverlay onClick={handleClickOutside}>
      <AddEditGuardContainer ref={addGuardRef}>
        <CloseButtonTopRight onClick={handleCloseAddTask}>
          <MdClose size='25px' color='#636E72' />
        </CloseButtonTopRight>
        <TopPart>
          <AddEditGuardTitle>Ajouter une garde</AddEditGuardTitle>
          <AddEditGuardInputCont>
            <AddEditGuardLabel>Date</AddEditGuardLabel>
            <DatePicker
              locale={locale}
              placeholder='Sélectioner une date'
              defaultValue={moment(dateOfTheGuardToAdd || new Date())}
              format='dddd, DD MMM YYYY'
              suffixIcon={<SelectDateIcon />}
              onChange={handleChangeDate}
            />
            <SelectTimeContainer>
              <TimePicker
                defaultValue={moment('09:00', format)}
                format={format}
                suffixIcon={<FiChevronDown />}
                onChange={handleChangeStartTime}
              />
              <SplitTimePicker>à</SplitTimePicker>
              <TimePicker
                defaultValue={moment('12:00', format)}
                format={format}
                suffixIcon={<FiChevronDown />}
                onChange={handleChangeEndTime}
              />
            </SelectTimeContainer>
            <SelectStatusContainer>
              <SelectContLeft>Status</SelectContLeft>
              <Select
                defaultValue='En attente'
                title='Select status'
                onChange={handleChangeSelectStatus}
              >
                <Option value='En attente'>En attente</Option>
                <Option value='Confirmée'>Confirmée</Option>
              </Select>
            </SelectStatusContainer>
            <Notif confirmed={guard.status === 'Confirmée'} />
          </AddEditGuardInputCont>
        </TopPart>

        <BottomPart>
          <ButtonAddEdit onClick={handleCloseAddTask} regular={true}>
            Annuler
          </ButtonAddEdit>
          <ButtonAddEdit>Confirmer</ButtonAddEdit>
        </BottomPart>
      </AddEditGuardContainer>
    </AddGuardOverlay>
  );
};

export default Index;
